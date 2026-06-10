# GitHub Pages 이미지 경로 수정 ✅

## 🔍 문제 원인

**URL**: `https://imhoyjeong00.github.io/succulent-type/`

현재 코드가 `./images/`를 찾지만, GitHub Pages 서브디렉토리 구조에서는:
- 올바른 경로: `/succulent-type/images/`
- 잘못된 경로: `./images/` (루트에서 찾음)

## ✅ 해결책

**파일의 시작부분에 경로 설정 추가:**

```javascript
// GitHub Pages 서브디렉토리 지원
const BASE_PATH = (() => {
  const pathname = window.location.pathname;
  // succulent-type 디렉토리에서 실행되는 경우
  if (pathname.includes('succulent-type')) {
    return '/succulent-type/images/';
  }
  // 로컬 또는 루트에서 실행되는 경우
  return './images/';
})();
```

**모든 이미지 경로를 `BASE_PATH` 사용으로 변경:**

```javascript
// 이전
img.src = `./images/${name}.png`;

// 변경 후
img.src = `${BASE_PATH}${name}.png`;
```

---

## 📝 변경된 위치 (4곳)

1. **preloadImages()** - 초기 이미지 로드
   ```javascript
   img.src = `${BASE_PATH}${name}.png`;
   ```

2. **preloadImages() - fallback**
   ```javascript
   fallback.src = `${BASE_PATH}${fallbackName}.png`;
   ```

3. **createSucculentElement()** - fallback
   ```javascript
   img.src = imageCache[fallbackName]?.src || `${BASE_PATH}${fallbackName}.png`;
   ```

4. **createSucculentElement()** - 메인 로드
   ```javascript
   img.src = `${BASE_PATH}${imgName}.png`;
   ```

---

## 🎯 동작

| 환경 | 경로 |
|------|------|
| **GitHub Pages** (succulent-type) | `/succulent-type/images/` |
| **로컬 테스트** | `./images/` |
| **다른 URL** | `./images/` |

---

## ✅ 확인 사항

- [x] 깃허브에 `/images/` 폴더 업로드됨
- [x] 이미지 파일들이 모두 있음 (A.png, B.png, ... Z.png 등)
- [x] GitHub Pages 활성화됨
- [x] 경로가 `/succulent-type/` 아래

---

## 🚀 적용 방법

1. 수정된 `script.js` 다운로드
2. 깃허브 저장소에 업로드 (또는 수정)
3. 브라우저 새로고침 (Ctrl+Shift+R - 캐시 비우기)
4. 이미지가 로드되어야 함

---

## 💡 추가 팁

**여전히 이미지가 안 나오면:**

1. 개발자 도구 열기 (F12)
2. Network 탭 확인
3. 이미지 요청이 어디로 가는지 확인
4. 깃허브 저장소에 `/images/` 폴더가 있는지 확인

**로컬에서 테스트하려면:**
- `python -m http.server 8000` 실행
- `localhost:8000`에서 테스트 (경로: `./images/`)
