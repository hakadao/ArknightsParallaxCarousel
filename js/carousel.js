let carouselList = [
  { serial: '01', title: '第二把赤霄', desc: '#决战#', href: 'https://prts.wiki/w/%E9%98%BF%E7%B1%B3%E5%A8%85(%E8%BF%91%E5%8D%AB)' },
  { serial: '02', title: '笔记', desc: '#企鹅物流的秘密#', href: 'https://prts.wiki/w/%E6%B3%B0%E6%8B%89%E5%A4%A7%E5%85%B8:%E7%BB%84%E7%BB%87/%E4%BC%81%E9%B9%85%E7%89%A9%E6%B5%81' },
  { serial: '03', title: '安洁莉娜', desc: '#信使#', href: 'https://prts.wiki/w/%E5%AE%89%E6%B4%81%E8%8E%89%E5%A8%9C' },
  { serial: '04', title: '莱茵生命', desc: '#科研#', href: 'https://prts.wiki/w/%E6%B3%B0%E6%8B%89%E5%A4%A7%E5%85%B8:%E7%BB%84%E7%BB%87/%E8%8E%B1%E8%8C%B5%E7%94%9F%E5%91%BD' },
  { serial: '05', title: '端午', desc: '#炎国水乡#', href: 'https://prts.wiki/w/%E6%B3%B0%E6%8B%89%E5%A4%A7%E5%85%B8:%E5%9C%B0%E7%90%86/%E7%82%8E' },
  { serial: '06', title: '龙门', desc: '#邻街一角#', href: 'https://prts.wiki/w/%E6%B3%B0%E6%8B%89%E5%A4%A7%E5%85%B8:%E5%9C%B0%E7%90%86/%E9%BE%99%E9%97%A8' },
  { serial: '07', title: '谜团', desc: '#源石#', href: 'https://prts.wiki/w/%E6%BA%90%E7%9F%B3%E8%99%AB' },
  { serial: '08', title: '启航', desc: '#任务外出#', href: 'https://ak.hypergryph.com/' },
  { serial: '09', title: '企鹅物流', desc: '#办公室#', href: 'https://prts.wiki/w/%E6%B3%B0%E6%8B%89%E5%A4%A7%E5%85%B8:%E7%BB%84%E7%BB%87/%E4%BC%81%E9%B9%85%E7%89%A9%E6%B5%81' },
  { serial: '10', title: '启示', desc: '#大厅#', href: 'https://ak.hypergryph.com/' },
  { serial: '11', title: '死灰复燃', desc: '#不死的黑蛇#', href: 'https://prts.wiki/w/%22%E4%B8%8D%E6%AD%BB%E7%9A%84%E9%BB%91%E8%9B%87%22' },
  { serial: '12', title: '苏醒', desc: '#石棺之间#', href: 'https://ak.hypergryph.com/' },
  { serial: '13', title: '乌萨斯学生自治团', desc: '#回忆中的教室#', href: 'https://prts.wiki/w/%E6%B3%B0%E6%8B%89%E5%A4%A7%E5%85%B8:%E7%BB%84%E7%BB%87/%E4%B9%8C%E8%90%A8%E6%96%AF%E5%AD%A6%E7%94%9F%E8%87%AA%E6%B2%BB%E5%9B%A2' },
  { serial: '14', title: '瑕光', desc: '#胜利的荣光#', href: 'https://prts.wiki/w/%E7%91%95%E5%85%89' },
  { serial: '15', title: '谢拉格', desc: '#喀兰贸易#', href: 'https://prts.wiki/w/%E6%B3%B0%E6%8B%89%E5%A4%A7%E5%85%B8:%E5%9C%B0%E7%90%86/%E8%B0%A2%E6%8B%89%E6%A0%BC' },
  { serial: '16', title: '预备组', desc: '#行动预备组A4#', href: 'https://prts.wiki/w/%E6%96%87%E4%BB%B6:%E5%9B%A2%E9%98%9Flogo_%E8%A1%8C%E5%8A%A8%E9%A2%84%E5%A4%87%E7%BB%84A4.png' },
  { serial: '17', title: '整装出发', desc: '#印象图#', href: 'https://ak.hypergryph.com/' },
  { serial: '18', title: '追忆', desc: '#过去的村庄#', href: 'https://ak.hypergryph.com/' },
]

for (let i = 0; i < carouselList.length; i++) {
  carouselList[i].thumbnail = `img/carousel_${i + 1}.png`
}

// 初始化輪播樣式
carouselList.forEach((item, index) => {
  document.querySelector('#media-list').innerHTML += `
  <div 
    class="media-list-item"
    data-index="${index}"
    data-serial="${item.serial}"
    data-title="${item.title}"
    data-desc="${item.desc}"
    data-thumbnail="${item.thumbnail}"
  >
    <div 
      class="media-list-item-img" 
      style="background-image: url(${item.thumbnail})"
      data-title="${item.title}"
    ></div>
  </div>
  `
  document.querySelector('#media-layer-front .media-nav-wrapper').innerHTML += `
  <div
    class="media-nav-item"
    active="${(index === 0)}"
    data-index="${index}"
    data-serial="${item.serial}"
    data-title="${item.title}"
    data-desc="${item.desc}"
    data-thumbnail="${item.thumbnail}"
  ></div>
  `
})

let activeIndex = 0 // 初始化激活的輪播索引
const layerFront = document.querySelector('#media-layer-front')
const mediaSerial = layerFront.querySelector('.media-info-serial')
const mediaTitle = layerFront.querySelector('.media-info-title')
const mediaDetail = layerFront.querySelector('.media-info-detail')
const mediaMainPic = document.querySelector('#media-layer-view .media-main-pic')
const mediaImage = mediaMainPic.querySelector('.media-img')
const mediaList = document.querySelector('#media-list')

// 初始化輪播資訊
mediaImage.href = carouselList[0].href
mediaImage.style = `background-image: url(${carouselList[0].thumbnail}); transform-origin: left top; transform: scale(1)`
mediaSerial.innerHTML = carouselList[0].serial
mediaTitle.innerHTML = carouselList[0].title
mediaDetail.innerHTML = carouselList[0].desc

/**
 * 設定輪播項間隔、點擊監聽事件
 */
for (let i = 0; i < carouselList.length; i++) {
  let mediaItem = mediaList.querySelector(`.media-list-item:nth-child(${i + 1})`)
  let navItem = layerFront.querySelector(`.media-nav-item:nth-child(${i + 1})`)

  const mediaListItem = mediaList.querySelector(`.media-list-item:nth-child(1)`)
  const mediaListItemWidth = getComputedStyle(mediaListItem).width.replace('px', '')
  let mediaListItemPaddingRight = getComputedStyle(mediaListItem).paddingRight.replace('px', '')

  // 計算x位移之闊度 = media-list-item 的 width + 左右padding
  let xWidth = (
    parseFloat(mediaListItemWidth) +
    parseFloat(mediaListItemPaddingRight) * 2
  ).toFixed(0)

  // 顯示前邊四張圖片，其他隱藏
  if (i <= 3) {
    mediaItem.style.transform = `translateX(${xWidth * i}px)`
    mediaItem.style.opacity = '1'
  } else {
    mediaItem.style.transform = `translateX(${xWidth * 3}px)`
    mediaItem.style.opacity = '0'
    mediaItem.style.pointerEvents = 'none'
  }

  // 輪播列表 輪播指示標同時添加點擊處理器
  let array = [mediaItem, navItem]
  array.forEach((item) => {
    item.addEventListener('click', () => {
      if (parseInt(item.dataset.index) > parseInt(activeIndex)) {
        carouselItemSwitching(i, 'left')
      } else if (parseInt(item.dataset.index) < parseInt(activeIndex)) {
        carouselItemSwitching(i, 'right')
      }
      activeIndex = item.dataset.index
    })
  })
}

/**
 * 左右箭咀click切換輪播事件
 */
const arrowBtnPrev = document.querySelector('#arrow-btn-prev')
const arrowBtnNext = document.querySelector('#arrow-btn-next')

arrowBtnPrev.addEventListener('click', () => {
  activeIndex > 0 ? activeIndex-- : (activeIndex = carouselList.length - 1)
  carouselItemSwitching(activeIndex, 'right')
})

arrowBtnNext.addEventListener('click', () => {
  activeIndex < carouselList.length - 1 ? activeIndex++ : (activeIndex = 0)
  carouselItemSwitching(activeIndex, 'left')
})

/**
 * 輪播項切換動畫
 * @param {number} index 激活的索引
 * @param {string} direction 動畫方向 (1.'left', 2.'right')
 */
function carouselItemSwitching(index, direction) {
  // 清空舊的輪播指示標激活狀態
  for (let i = 0; i < carouselList.length; i++) {
    layerFront
      .querySelector(`.media-nav-item:nth-child(${i + 1})`)
      .setAttribute('active', 'false')
  }
  // 激活當前選中的輪播指示標
  layerFront
    .querySelector(`.media-nav-item:nth-child(${index + 1})`)
    .setAttribute('active', 'true')

  imageZoom(0.25, direction, carouselList[index].thumbnail, carouselList[index].href).then(() => {})
  slideInText(mediaSerial, direction, 0.2, 0.4, carouselList[index].serial).then(() => {})
  slideInText(mediaTitle, direction, 0.2, 0.5, carouselList[index].title).then(() => {})
  slideInText(mediaDetail, direction, 0.2, 0.6, carouselList[index].desc).then(() => {})
  setSlidePosition(index)
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

/**
 * 文字滑入動畫
 * @param {HTMLElement} element 要套用動畫的HTML元素
 * @param {string} direction 方向 (1.'left', 2.'right')
 * @param {number} duration 持續時間
 * @param {number} delay 延遲時間
 * @param {string} newText 滑入過後顯示的文字
 */
async function slideInText(element, direction, duration, delay, newText) {
  let a
  if (direction === 'left') {
    a = -50
  } else if (direction === 'right') {
    a = 50
  }
  element.style.transition = `${duration}s ease-out`

  await sleep(delay * 1000)
  element.style.opacity = `0`
  element.style.transform = `translateX(${a}%)`
  await sleep(duration * 1000)
  element.style.transform = `translateX(${-a}%)`
  element.style.opacity = `0`
  await sleep(duration * 1000)
  element.innerHTML = newText
  element.style.transform = `translateX(0)`
  element.style.opacity = `1`
  await sleep(delay * 1000)
}

/**
 * 圖片切換動畫
 * @param {number} duration 持續時間
 * @param {string} direction 方向 (1.'left', 2.'right')
 * @param {string} newImg 切換後的圖片
 * @param {string} href 点击图片转跳链接
 */
async function imageZoom(duration, direction, newImg, href) {

  let oldImgTransformOrigin
  let newImgTransformOrigin
  if (direction === 'left') {
    oldImgTransformOrigin = 'left top'
    newImgTransformOrigin = 'right bottom'
  } else if (direction === 'right') {
    oldImgTransformOrigin = 'right bottom'
    newImgTransformOrigin = 'left top'
  }

  mediaMainPic.innerHTML += mediaMainPic.innerHTML
  const mediaOldImg = mediaMainPic.querySelector('.media-img:nth-child(1)')
  const mediaNewImg = mediaMainPic.querySelector('.media-img:nth-child(2)')
  mediaNewImg.href = href
  mediaNewImg.style.backgroundImage = `url(${newImg})`

  mediaOldImg.style.transformOrigin = oldImgTransformOrigin
  mediaOldImg.style.transform = 'scale(1)'
  mediaOldImg.style.transition = `${duration}s`

  mediaNewImg.style.transformOrigin = newImgTransformOrigin
  mediaNewImg.style.transform = 'scale(0)'
  mediaNewImg.style.transition = `${duration}s`

  await sleep(duration * 1000)
  mediaOldImg.style.transform = 'scale(0)'
  mediaNewImg.style.transform = 'scale(1)'
  await sleep(duration * 1000)
  mediaMainPic.innerHTML = mediaNewImg.outerHTML
}

function setSlidePosition(activeIndex) {
  for (let i = 0; i < carouselList.length; i++) {
    let mediaItem = mediaList.querySelector(
      `.media-list-item:nth-child(${i + 1})`
    )

    const mediaListItem = mediaList.querySelector(
      `.media-list-item:nth-child(1)`
    )
    const mediaListItemWidth = getComputedStyle(mediaListItem).width.replace(
      'px',
      ''
    )
    let mediaListItemPaddingRight = getComputedStyle(
      mediaListItem
    ).paddingRight.replace('px', '')

    // 計算x位移之闊度 = media-list-item 的 width + 左右padding
    let xWidth = (
      parseFloat(mediaListItemWidth) +
      parseFloat(mediaListItemPaddingRight) * 2
    ).toFixed(0)

    let xPosition = xWidth * i - xWidth * (activeIndex - 1)

    if (xPosition <= -xWidth) {
      mediaItem.style.transform = `translateX(${-xWidth}px)`
      mediaItem.style.opacity = '0'
      mediaItem.style.pointerEvents = 'none'
    } else if (xPosition >= xWidth * 4) {
      mediaItem.style.transform = `translateX(${xWidth * 4}px)`
      mediaItem.style.opacity = '0'
      mediaItem.style.pointerEvents = 'none'
    } else {
      mediaItem.style.transform = `translateX(${
        xWidth * i - xWidth * (activeIndex - 1)
      }px)`
      mediaItem.style.opacity = '1'
      mediaItem.style.pointerEvents = 'auto'
    }

    if (activeIndex === 0) {
      for (let j = 0; j < 2; j++) {
        mediaList.querySelector(
          `.media-list-item:nth-child(${carouselList.length - j})`
        ).style.transform = `translateX(${xWidth * -j}px)`
        mediaList.querySelector(
          `.media-list-item:nth-child(${carouselList.length})`
        ).style.opacity = '1'
        mediaList.querySelector(
          `.media-list-item:nth-child(${carouselList.length})`
        ).style.pointerEvents = 'auto'
      }
    }

    if (activeIndex === 1) {
      for (let j = 0; j < 2; j++) {
        mediaList.querySelector(
          `.media-list-item:nth-child(${carouselList.length - j})`
        ).style.transform = `translateX(${-xWidth}px)`
        mediaList.querySelector(
          `.media-list-item:nth-child(${carouselList.length - j})`
        ).style.opacity = '0'
        mediaList.querySelector(
          `.media-list-item:nth-child(${carouselList.length - j})`
        ).style.pointerEvents = 'none'
      }
    }

    if (activeIndex >= carouselList.length - 3) {
      for (let j = 0; j < 3; j++) {
        mediaList.querySelector(
          `.media-list-item:nth-child(${j + 1})`
        ).style.transform = `translateX(${xWidth * 4}px)`
        mediaList.querySelector(
          `.media-list-item:nth-child(2)`
        ).style.opacity = '0'
        mediaList.querySelector(
          `.media-list-item:nth-child(2)`
        ).style.pointerEvents = 'none'
      }
    }

    if (activeIndex >= carouselList.length - 2) {
      let a = activeIndex % 3
      for (let j = 0; j < 2; j++) {
        mediaList.querySelector(
          `.media-list-item:nth-child(${j + 1})`
        ).style.transform = `translateX(${xWidth * (4 - a + j)}px)`
      }

      if (activeIndex === carouselList.length - 2) {
        mediaList.querySelector(
          `.media-list-item:nth-child(1)`
        ).style.opacity = '1'
        mediaList.querySelector(
          `.media-list-item:nth-child(1)`
        ).style.pointerEvents = 'auto'
      }

      if (activeIndex === carouselList.length - 1) {
        mediaList.querySelector(
          `.media-list-item:nth-child(1)`
        ).style.opacity = '1'
        mediaList.querySelector(
          `.media-list-item:nth-child(2)`
        ).style.opacity = '1'
        mediaList.querySelector(
          `.media-list-item:nth-child(1)`
        ).style.pointerEvents = 'auto'
        mediaList.querySelector(
          `.media-list-item:nth-child(2)`
        ).style.pointerEvents = 'auto'
      }
    }
  }
}
