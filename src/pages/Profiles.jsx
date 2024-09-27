import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import Profile from './Profile';
import AddProfileModal from './AddProfileModal'; // 추가 모달 컴포넌트 import
import EditProfileModal from './EditProfileModal'; // 프로필 수정 모달 import
import styles from "./Profiles.module.css";

export default function Profiles() {
    const [profiles, setProfiles] = useState([
        {
            id: uuidv4(),
            name: '박지환',
            image: 'https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABevv_n4V49aKUd6YQ6IHFCL8_VH5R_aC6TbOpuzuMsdr4AVJjLi5NJiPO3JO2x0O9pBNlCAeRVn5HLCrxherNE1r64b3dlmet4cp.png?r=a21', // 프로필 이미지 링크
        },
        {
            id: uuidv4(),
            name: '정서',
            image: 'https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTQb4onJNzePvqB4VO8Z94uR4iujLRUCKuA84ACgw3iNo882XfF9eSYaf0P7l1j41QlLtnzZs2WRSN2sigbOQvxbAxkLmjYyjRSc.png?r=8d8', // 프로필 이미지 링크
        },
        {
            id: uuidv4(),
            name: '키즈',
            image: 'https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQuUOLS3syA03fnBnh3AZSasbXLyQEezgEn1diQnef2F6zKTm-TaLYXGRz02fxBb7wKZF2clWODM79xIpmNjOH0GoG_tbVMlEKN4.png?r=15b', // 키즈 프로필 이미지 링크
        },
    ]);

    const [isEditMode, setIsEditMode] = useState(false); // 프로필 관리 모드 여부
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // 수정 모달 상태
    const [isAddModalOpen, setIsAddModalOpen] = useState(false); // 추가 모달 상태
    const [selectedProfile, setSelectedProfile] = useState(null); // 수정할 프로필

    // localStorage에 프로필 목록 저장하기
    useEffect(() => {
        localStorage.setItem("profiles", JSON.stringify(profiles)); 
    }, [profiles]);

    // 프로필 관리 모드 전환
    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    // 프로필 클릭 시 수정 모달 열기
    const openEditModal = (profile) => {
        if (!isEditMode) return; // 관리 모드가 아니면 클릭 불가능
        setSelectedProfile(profile);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const openAddModal = () => {
        setIsAddModalOpen(true); // 프로필 추가 모달 열기
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false); // 프로필 추가 모달 닫기
    };

    const saveProfile = (newProfile) => {
        setProfiles([...profiles, newProfile]); // 새로운 프로필을 기존 프로필 배열에 추가
        closeAddModal(); // 추가 모달 닫기
    };

    const updateProfile = (updatedProfile) => {
        setProfiles(
            profiles.map(profile =>
                profile.id === updatedProfile.id ? updatedProfile : profile
            )
        );
        closeEditModal(); // 수정 모달 닫기
    };

    // 프로필 삭제 함수
    const deleteProfile = (id) => {
        setProfiles(profiles.filter((profile) => profile.id !== id)); // 해당 프로필 제거
        closeEditModal(); // 모달 닫기
    };

    return (
        <div className={styles.everything}>
            <h1 className={styles.title}>{isEditMode ? '프로필 관리' : '넷플릭스를 시청할 프로필을 선택하세요.'}</h1>
            <div className={styles.profileList}>
                {profiles.map((profile) => (
                    <Profile 
                        key={profile.id} 
                        profile={profile} 
                        onClick={() => openEditModal(profile)} // 관리 모드일 때만 수정 모달 열기
                    />
                ))}
                <div className={styles.addProfileContainer}>
                    <button className={styles.addProfile} onClick={openAddModal}>
                        <span className={styles.addIcon}>+</span>
                    </button>
                    <span className={styles.addText}>프로필 추가</span>
                </div>
            </div>
            <button className={styles.manageButton} onClick={toggleEditMode}>
                {isEditMode ? '완료' : '프로필 관리'}
            </button>
            {isAddModalOpen && <AddProfileModal closeModal={closeAddModal} saveProfile={saveProfile} />}
            {isEditModalOpen && (
                <EditProfileModal
                    closeModal={closeEditModal}
                    profile={selectedProfile}
                    updateProfile={updateProfile}
                    deleteProfile={deleteProfile}
                />
            )}
        </div>
    );
}
