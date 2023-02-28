## 📚 콜버스랩 FE 과제 

<br>
리드미를 참고해주면 감사하겠습니다.  😃
<br>
<strong>🌈 목차</strong>
<br>

- [프로젝트 기간](#프로젝트-기간)
- [Start](#start)
- [Tools](#tools)
- [Check List](#check-list)
- [ GIF & Image ](#gif--image)
- [Project Architecture](#project-architecture)
- [Module Install](#install-module)


  
<br>

## Intro

콜버스 FE 사전 테스트로 진행된 프로젝트입니다. 
<br>
세입자 환급금 예상 퍼널을 구현하는 것으로, 임대정보, 거주정보를 입력하여 완료화면까지 화면에 출력하는 과정을 담고 있습니다.
   

<br>


## 프로젝트 기간

: 2022.02.27 ~ 2023.02.28
<br>

## Start

```
npm install
npm run start
```

<br>

##  Tools

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=%2361DAFB">  
<br>
<img src="https://img.shields.io/badge/Emotion-F16521?style=for-the-badge&logo=Etsy&logoColor=white">
<img src="https://img.shields.io/badge/Ant Design-0170FE?style=for-the-badge&logo=Ant Design&logoColor=white">
<img src="https://img.shields.io/badge/Chakra UI-319795?style=for-the-badge&logo=Chakra UI&logoColor=white">
<br>
<img src="https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white">
<img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">


<br>

 ## Check List
<mark style='background-color: yellow'> 💡 실제 구현 코드를 간략화한 코드들입니다. (화살표 버튼을 클릭하여 글을 확인해주세요.)</mark>
<br>

 #### ✅ 조건

-  React 및 Typescript로 개발 ✔️ 


- Git을 이용해 코드 버전 관리 ✔️ 
- 로컬 환경에서 프로젝트를 실행 가능 ✔️
- `README.md`에 개발 환경을 작성 ✔️ 
- 화면상 보이는 기능은 구현  ✔️

- flow에 필요한 페이지는 모두 구현 ✔️ 



<strong>: 주어진 요구사항에 대한 구현 완료 </strong>

####  ✅ 임대정보 입력 페이지

#####  임대 유형 선택
<details>
<summary> 임대 유형은 월세, 전세입니다. ✔️ </summary>
👉임대 유형이 선택 됐을 때 `임대 비용 입력 인풋창`, `금액 확인하기 버튼`이 나타납니다.
<br>
⭐️ 직접 구현한 화면입니다.
<br>
<img width="450" alt="스크린샷 2023-02-28 오후 3 38 12" src="https://user-images.githubusercontent.com/81337674/221772272-5895161c-0874-407c-9e30-4fcc787accc2.gif">
 </details>

##### 임대 비용 입력
 <details>
 <summary>임대 유형에 따라 입력 받아야되는 화면과 데이터가 다릅니다. ✔️ </summary>
<br>
⭐️ 직접 구현한 화면입니다.
<br>
<img width="347" alt="스크린샷 2023-02-28 오후 3 38 12" src="https://user-images.githubusercontent.com/81337674/221773886-0dbc7f65-7473-47cd-b6e6-3a62ecc439c6.png">
<img width="350" alt="스크린샷 2023-02-28 오후 3 35 01" src="https://user-images.githubusercontent.com/81337674/221773358-acfb7ecf-631d-4a12-92d5-3b494d2fb2cf.png">
<br>
 </details>
 <details>
 <summary>납부하는 관리비가 없다면 체크박스를 통해서 input을 disabled. ✔️ </summary>
<br>
⭐️ 직접 구현한 화면입니다.
<br>

<img width="550" alt="disabled 기능" src="https://user-images.githubusercontent.com/81337674/221774682-8e414915-07df-49c0-95ef-8e7d9a126489.gif">
<img width="360" alt="월관리비 0원" src="https://user-images.githubusercontent.com/81337674/221774814-ad9a43d3-844a-413d-b99b-215b51ecb80c.png">
<br>
 </details>
 <details>
 <summary>임대료 납부일은 1 ~ 31일까지 입력을 받을 수 있습니다. ✔️ </summary>
<br>
⭐️ 직접 구현한 화면입니다.
<br>

<img width="458" alt="날짜조건" src="https://user-images.githubusercontent.com/81337674/221775368-7c3f1cff-28bd-4979-a554-3db230a4a3fd.png">
<br>
</details>
</details>
 <details>
 <summary> 데이터 모두 입력 유효성 검사, 미입력시 경고팝업 + 페이지 이동 ✔️ </summary>
<br>
⭐️ 직접 구현한 화면입니다.
<br>

<img width="458" alt="유효성검사 및 이동" src="https://user-images.githubusercontent.com/81337674/221775641-4dd72e49-b27e-44c3-b2f7-f46e233a4694.gif">
<br>
 </details>
<br>

####  ✅ 거주 정보 입력 페이지

#####  월세 환급금 예상
<details>
<summary> 월 임대료를 사용하여 환급금 출력하기 ✔️ </summary>
<br>
⭐️ 직접 구현한 화면입니다.
<br>

<img width="400" alt="월세 환급" src="https://user-images.githubusercontent.com/81337674/221775957-73437078-d2b2-49bf-a68e-362aa52b5516.png">
 </details>
<details>
<summary> 수정하기를 클릭시 뒤로 이동되며, 입력했던 임대 유형과 임대 비용 정보들이 유지 ✔️ </summary>
<br>
⭐️ 직접 구현한 화면입니다.
<br>

<img width="450" alt="스크린샷 2023-02-28 오후 3 38 12" src="https://user-images.githubusercontent.com/81337674/221814182-7fc49cb0-00c6-4701-bdfa-2df5098e9fc6.gif">
<br>
<br>
 </details>
<br>

#####  거주 정보 입력
 <details>
 <summary>input 입력 조건 ✔️ </summary>
👉 거주 건물 입력은 최대 30자 ✔️
<br>
👉 호실은 최대 20자 ✔️
<br>
👉  세입자 이름은 최대 20자 ✔️
<br>
</details>
<details>
<summary>정보 입력시 차례대로 인풋창 나타내기 ✔️ </summary>
<br>
👉  거주 건물, 호실, 세입자 이름 3가지 데이터가 채워졌을 때 계약 시작일, 계약 종료일 이 나타나기 ✔️
<br>
👉 계약 시작일, 종료일은 `YYYY-MM-DD`형태로 입력 받기 ✔️
<br>
👉  계약일이 모두 입력 됐을 때, `임대인 휴대번호 입력 인풋창`과 완료 버튼이 나타나기 ✔️ 
<br>
⭐️ 직접 구현한 화면입니다.
<br>

<img width="458" alt="거주 목록 출력" src="https://user-images.githubusercontent.com/81337674/221776466-d712d91a-38b4-4c1b-abbe-5d90035c580b.gif">
<br>
</details>
</details>
 <details>
 <summary> 휴대번호 조건 ✔️ </summary>
<br>
⭐️ 직접 구현한 화면입니다.
<br>

<img width="409" alt="스크린샷 2023-02-28 오후 3 54 24" src="https://user-images.githubusercontent.com/81337674/221777046-dba34df3-d90f-4313-ae66-e544ae81c895.png">
<br>
 </details>

 ####  ✅ 완료 페이지

#####  완료 화면
 <details>
 <summary>input 입력 조건 ✔️ </summary>
<br>
👉 이전 페이지에서 받은 정보들을 이용하여 화면을 구성 ✔️ 
<br>
👉 주소가 1줄을 넘어가는 경우는 `…`(말줄임표)로 표기 ✔️

```typescript
  <TextOverFlow>
        {selector.inputState.Address} {selector.inputState.RoomNumber}
  </TextOverFlow>

  export const TextOverFlow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
```
<br>
👉 납부 총액은 임대료와 관리비를 더하기 ✔️ 

```typescript
        <Info>{Number(MontlyRent) + Number(MontlyFee)} 만원</Info>
```
<br/>
<img width="390" alt="스크린샷 2023-02-28 오후 4 02 33" src="https://user-images.githubusercontent.com/81337674/221778651-c1b2c3dd-5f1b-42d6-9c4d-f74f6d633f34.png">
<br/>
👉 임대인 문자와 임대인 전화 버튼을 클릭시 각각 문자, 전화 앱으로 연결 대신 클립보드 복사하기 기능을 구현해보았습니다.
<br>
<img width="489" alt="스크린샷 2023-02-28 오후 4 00 43" src="https://user-images.githubusercontent.com/81337674/221778462-edab9100-9cbb-436c-97ab-686797191515.png">
<br>
 </details>
<br/>

####  👍 심화 구현사항


<details>
<summary> 거주 건물에 입력을 받았을 때 주소API를 통해서 입력받기  ✔️ </summary>
<br>
카카오(다음)의 주소API를 사용하여 구현해보았습니다.(react-daum-postcode)
<br>
⭐️ 직접 구현한 화면입니다.
<br>
<img width="489" alt="스크린샷 2023-02-28 오후 4 00 43" src="https://user-images.githubusercontent.com/81337674/221779452-b768d71c-6486-48fa-a361-7b9e068f370a.gif">

<br>
</details>
<details>
<summary> 계약시작일, 계약종료일 달력을 직접 구현하거나, 라이브러리를 사용해서 구현  ✔️ </summary>
<br>
chakra UI 라이브러리의 캘린더를 사용했으며, 이 캘린더의 경우 시,분 까지 표기가 되어 완료 페이지에 출력할때는 년,월,일만 표시할 수 있도록 코드를 구현하였습니다.

```typescript
// src/hooks/Completion/bottom.tsx
<Period>계약 기간 : {`${getCalendarDate(StartDate)} ~ ${getCalendarDate(EndDate)}`}</Period>

/// src/utils/getCalendarDate.ts
export const getCalendarDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });

  return formattedDate;
};

```
<br>
⭐️ 직접 구현한 화면입니다.
<br>
<img width="521" alt="스크린샷 2023-02-28 오후 6 27 29" src="https://user-images.githubusercontent.com/81337674/221810470-34798ae1-5344-4967-885c-5596f3576e0d.png">

<br>
</details>

<br>


## GIF & Image

|**임대정보 페이지** | **거주정보 입력 페이지**  |
| :------: | :--------------: |
|<img width="400" alt="스크린샷 2023-02-28 오후 10 00 09" src="https://user-images.githubusercontent.com/81337674/221859098-fef8c58d-4465-45f9-9a94-6abd970dcb0d.gif">|<img width="400" alt="스크린샷 2023-02-28 오후 10 00 09" src="https://user-images.githubusercontent.com/81337674/221859124-8cd66ba3-dfb6-4cae-b374-48e912eaaf56.gif">|
| **완료 페이지** | **알림창**|
|<img width="400" alt="스크린샷 2023-02-28 오후 10 00 09" src="https://user-images.githubusercontent.com/81337674/221859140-e4e0c6d2-10c0-47da-abb6-2256f3946c75.gif">|<img width="400" alt="스크린샷 2023-02-28 오후 10 00 09" src="https://user-images.githubusercontent.com/81337674/221861050-287f8f24-a1da-4441-b341-19a5df514db2.png">|
| **월세** | **전세**|
|<img width="400" alt="스크린샷 2023-02-28 오후 9 48 05" src="https://user-images.githubusercontent.com/81337674/221859341-f96d2640-61c1-459b-9fdc-ab33c7336f92.png">|<img width="400" alt="스크린샷 2023-02-28 오후 9 48 16" src="https://user-images.githubusercontent.com/81337674/221859438-67fd5428-62ac-44b5-933a-b3cfaaa18c36.png">|
| **사용자정보** | **결과화면**|
|<img width="400" alt="스크린샷 2023-02-28 오후 9 48 52" src="https://user-images.githubusercontent.com/81337674/221859916-3f66148c-a2f9-4885-924f-dc96a6ca78b2.png">|<img width="400" alt="스크린샷 2023-02-28 오후 9 49 00" src="https://user-images.githubusercontent.com/81337674/221859827-27131c62-3aa5-415f-b22f-0a12120ad33a.png">|
| **주소API** | **캘린더 라이브러리**|
|<img width="400" alt="스크린샷 2023-02-28 오후 9 50 26" src="https://user-images.githubusercontent.com/81337674/221860176-e40641ab-b507-41ac-a736-99b3e8da4950.png">|<img width="400" alt="스크린샷 2023-02-28 오후 9 50 42" src="https://user-images.githubusercontent.com/81337674/221860107-a24d4ae0-5626-40be-b5d3-470ed2d90570.png">|


<br>

##  Project Architecture

```
⭐️ src
|
├── 🗂 redux 
│     ├──  🗂 reducer - 📄 insplice.tsx
│     └──  🗂 store - 📄 store.tsx
│
├── 🗂 components
│   │
│   ├── 🗂 completion
│   │     ├── 📄 index.tsx
│   │     ├── 📄 Top.tsx
│   │     ├── 📄 Middle.tsx
│   │     └── 📄 Bottom.tsx
│   │
│   ├── 🗂 Rental
│   │     ├── 🗂 Input
│   │     ├── 📄 index.tsx
│   │     ├── 📄 Header.tsx
│   │     └── 📄 InputWrapper.tsx
│   │
│   ├── 🗂 Residency
│   │     ├── 🗂 Input
│   │     ├── 📄 index.tsx
│   │     └── 📄 Header.tsx
│   │
│   ├── 🗂 NavBar
│   │     └── 📄 index.tsx
│   │
│   └──  🗂 LoadUI
│         ├── 📄 LoadSpinner.tsx
│         └── 📄 Skeleton.tsx
│
├── 🗂 hooks
│     ├── 📄 useCustomSelector.ts
│     ├── 📄 useCustomToast.ts
│     └── 📄 useCustomInput.ts
│
├── 🗂 styles
│     ├── 📄 COmpletion.style.ts
│     ├── 📄 NavBar.style.ts
│     ├── 📄 Rental.style.ts
│     └── 📄 Residency.style.ts
│
├── 🗂 types - 📄 type.tsx
│   
├── 🗂 layout - 📄 layout.tsx
│  
├── 🗂 utils
│     ├── 📄 getCalendarDate.ts
│     └── 📄 getMontlyRefund.style.ts
│
├── 🗂 pages 
│     ├──  🗂 rentalPage - 📄 index.tsx
│     ├──  🗂 residencyPage - 📄 index.tsx
│     └──  🗂 completionPage - 📄 index.tsx
│
├──  📄 app.tsx
└──  📄 index.tsx
```

<br>

<img width="400" alt="스크린샷 2023-02-28 오후 9 33 03" src="https://user-images.githubusercontent.com/81337674/221855213-bbb49326-b1f0-4218-b337-ca678bd04265.png">

<br>

## Install Module 

#### 👉 package.json


```
 "dependencies": {
    "@chakra-ui/react": "^2.5.1",
    "@emotion/babel-plugin": "^11.10.5",
    "@emotion/css": "^11.10.0",
    "@emotion/react": "^11.10.6",
    "@emotion/styled": "^11.10.6",
    "@reduxjs/toolkit": "^1.9.3",
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@types/react-router-dom": "^5.3.3",
    "framer-motion": "^7.2.1",
    "react": "^18.2.0",
    "react-daum-postcode": "^3.1.1",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.8.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "devDependencies": {
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "eslint": "^8.33.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "prettier": "^2.8.3"
  },

```




