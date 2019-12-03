
import "./style.scss"

let canvas = document.getElementById('canvas')

if(canvas.getContext) {
  let ctx = canvas.getContext('2d')
  ctx.fillRect(10, 10, 150, 150)
  ctx.strokeRect(20, 20, 150, 150)
  ctx.clearRect(20, 20, 130, 130)

  ctx.beginPath()
  ctx.moveTo(75, 75)
  ctx.lineTo(200, 75)
  ctx.lineTo(200, 200)
  ctx.closePath()
  ctx.stroke()

  //脸
  ctx.beginPath()
  ctx.arc(260, 80, 50, 0, Math.PI*2, true)
  ctx.fillStyle = '#F9A404'
  ctx.fill()
  //微笑
  ctx.beginPath()
  ctx.arc(260, 90, 32, 0, Math.PI, false)
  ctx.stroke()
  //左眼
  let eye_y_top = 70, eye_y_top_i = 55, eye_y_top_s = 215
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s, eye_y_top)
  ctx.bezierCurveTo(eye_y_top_s+10, eye_y_top_i, eye_y_top_s+30, eye_y_top_i, eye_y_top_s+40, eye_y_top)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s+5, 75)
  ctx.bezierCurveTo(eye_y_top_s+15, 65, eye_y_top_s+25, 65, eye_y_top_s+35, 75)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s, eye_y_top)
  ctx.quadraticCurveTo(eye_y_top_s, 76, eye_y_top_s+5, 75)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s+40, eye_y_top)
  ctx.quadraticCurveTo(eye_y_top_s+40, 76, eye_y_top_s+35, 75)
  ctx.stroke()
  //白色眼睛
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s, eye_y_top)
  ctx.bezierCurveTo(eye_y_top_s+10, eye_y_top_i, eye_y_top_s+30, eye_y_top_i, eye_y_top_s+40, eye_y_top)
  ctx.lineTo(eye_y_top_s+40, eye_y_top)
  ctx.quadraticCurveTo(eye_y_top_s+40, 76, eye_y_top_s+35, 75)
  ctx.lineTo(eye_y_top_s+35, 75)
  ctx.bezierCurveTo(eye_y_top_s+25, 65, eye_y_top_s+15, 65, eye_y_top_s+5, 75)
  ctx.lineTo(eye_y_top_s+5, 75)
  ctx.quadraticCurveTo(eye_y_top_s, 76, eye_y_top_s+5, 75)
  ctx.fillStyle = '#fff'
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(eye_y_top_s, eye_y_top)
  ctx.arc(eye_y_top_s+4, 71, 4, 0, Math.PI*2, true)
  ctx.fillStyle = '#000'
  ctx.fill()
  //右眼
  eye_y_top_s += 50
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s, eye_y_top)
  ctx.bezierCurveTo(eye_y_top_s+10, eye_y_top_i, eye_y_top_s+30, eye_y_top_i, eye_y_top_s+40, eye_y_top)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s+5, 75)
  ctx.bezierCurveTo(eye_y_top_s+15, 65, eye_y_top_s+25, 65, eye_y_top_s+35, 75)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s, eye_y_top)
  ctx.quadraticCurveTo(eye_y_top_s, 76, eye_y_top_s+5, 75)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s+40, eye_y_top)
  ctx.quadraticCurveTo(eye_y_top_s+40, 76, eye_y_top_s+35, 75)
  ctx.stroke()
  //白色眼睛
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s, eye_y_top)
  ctx.bezierCurveTo(eye_y_top_s+10, eye_y_top_i, eye_y_top_s+30, eye_y_top_i, eye_y_top_s+40, eye_y_top)
  ctx.lineTo(eye_y_top_s+40, eye_y_top)
  ctx.quadraticCurveTo(eye_y_top_s+40, 76, eye_y_top_s+35, 75)
  ctx.lineTo(eye_y_top_s+35, 75)
  ctx.bezierCurveTo(eye_y_top_s+25, 65, eye_y_top_s+15, 65, eye_y_top_s+5, 75)
  ctx.lineTo(eye_y_top_s+5, 75)
  ctx.quadraticCurveTo(eye_y_top_s, 76, eye_y_top_s+5, 75)
  ctx.fillStyle = '#fff'
  ctx.fill()
  
  ctx.beginPath()
  ctx.moveTo(eye_y_top_s, eye_y_top)
  ctx.arc(eye_y_top_s+4, 71, 4, 0, Math.PI*2, true)
  ctx.fillStyle = '#000'
  ctx.fill()
  //左眉
  let eye_m_x = 230, eye_m_t = 50
  ctx.beginPath()
  ctx.moveTo(eye_m_x, eye_m_t)
  ctx.bezierCurveTo(eye_m_x+5, eye_m_t-3, eye_m_x+15, eye_m_t-3, eye_m_x+20, eye_m_t)
  ctx.stroke()
  //右眉
  eye_m_x += 40
  ctx.beginPath()
  ctx.moveTo(eye_m_x, eye_m_t)
  ctx.bezierCurveTo(eye_m_x+5, eye_m_t-3, eye_m_x+15, eye_m_t-3, eye_m_x+20, eye_m_t)
  ctx.stroke()
}else {
  throw new Error('cnvas is not allowed!!!');
}