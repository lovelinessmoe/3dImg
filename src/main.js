import { Viewer } from '@photo-sphere-viewer/core'
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin'
import '@photo-sphere-viewer/core/index.css'

function getQueryVariable(variable) {
    const query = window.location.search.substring(1)
    const vars = query.split('&')
    for (const item of vars) {
        const pair = item.split('=')
        if (pair[0] === variable) {
            return item.replace(pair[0] + '=', '')
        }
    }
    return false
}

const defaultImg = 'https://oss.ashes.vip/PXL_20220601_085820493.PHOTOSPHERE.jpg'
const imgSrc = getQueryVariable('img') || defaultImg

new Viewer({
    container: document.getElementById('viewer'),
    panorama: imgSrc,
    touchmoveTwoFingers: false,
    defaultZoomLvl: 50,
    plugins: [
        [GyroscopePlugin, {
            touchmove: true,
        }],
    ],
    navbar: [
        'zoom',
        'gyroscope',
        'fullscreen',
    ],
})
