import React, { useState } from 'react';
import styles from './AddProfileModal.module.css';
import { v4 as uuidv4 } from "uuid";
export default function AddProfileModal({ closeModal, saveProfile }) {
    const [name, setName] = useState('');
    const [isKidsProfile, setIsKidsProfile] = useState(false);

    const handleSave = () => {
        if (name.trim() === '') {
            alert('이름을 입력해주세요.');
            return;
        }
        const newProfile = {
            id: uuidv4(),
            name: name,
            image: isKidsProfile 
                ? 'https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQuUOLS3syA03fnBnh3AZSasbXLyQEezgEn1diQnef2F6zKTm-TaLYXGRz02fxBb7wKZF2clWODM79xIpmNjOH0GoG_tbVMlEKN4.png?r=15b' 
                : 'https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4',
        };
        saveProfile(newProfile);
        closeModal();
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2>프로필 추가</h2>
                    <button onClick={closeModal} className={styles.closeButton}>X</button>
                </div>
                <div className={styles.modalBody}>
                    <p>넷플릭스를 시청할 다른 사용자를 등록하시려면 프로필을 추가하세요.</p>
                    <hr></hr>
                    <div className={styles.profileInput}>
                        <img 
                            src="https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4" 
                            alt="프로필 이미지"
                            className={styles.profileImage}
                        />
                        <input 
                            type="text" 
                            placeholder="이름" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className={styles.nameInput}
                        />
                    </div>
                    <div className={styles.kidsProfileOption}>
                        <label>키즈 프로필</label>
                        <span>어린이용 시리즈와 영화만 표시</span>
                        <label className={styles.switch}> 
                            {/*레이블 내부에는 type=“checkbox"를 가진 <input> 요소가 있다 */}
                            {/*사용자가 상호 작용할 수 있는 실제 체크박스 입력 컨트롤러 */}
                            <input 
                                type="checkbox" 
                                checked={isKidsProfile} 
                                onChange={() => setIsKidsProfile(!isKidsProfile)} 
                            />
                            {/*<span class=“slider”> “slider” 클래스를 가진 <span> 요소는 토글 스위치의 시각적 모습을 나타낸다. */}
                            {/*이 부분은 사용자가 체크박스의 상태를 클릭하여 조작할 수 있다. */}
                            {/*이 요소는 체크박스가 선택된 경우 “활성화” 위치를 나타내기 위해 시각적으로 왼쪽에서 오른쪽으로 슬라이드 된다. */}
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={handleSave} className={styles.saveButton}>저장</button>
                    <button onClick={closeModal} className={styles.cancelButton}>취소</button>
                </div>
            </div>
        </div>
    );
}
