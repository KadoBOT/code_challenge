import _ from 'lodash'

const formatPayload = (payload) => {
  const newPayload = {
    a: _.map(_.dropWhile(payload.checkboxes, p => !p.completed), v => v.name),
    b: _.find(payload.togglebuttons, { active: true }).name,
    text: payload.textfield.value,
    c: payload.selectbox.selected,
  }

  return newPayload
}

export default formatPayload
