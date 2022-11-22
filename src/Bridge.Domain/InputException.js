const { BRIDGE } = require("../lib/Const");

const exception = (ment) => new Error(`[ERROR] ${ment}`);

const InputException = {
  BridgeSizeValidate(size) {
    const intSize = parseInt(size);
    if (size < BRIDGE.SIZE.MIN || size > BRIDGE.SIZE.MAX)
      throw exception("올바른 다리 사이즈가 아닙니다.");
    if (isNaN(intSize)) throw exception("숫자만 입력가능합니다.");
  },

  playerDirectionValidate(direction) {
    const directionArr = [BRIDGE.UP.SHAPE, BRIDGE.DOWN.SHAPE];
    if (!directionArr.includes(direction))
      throw exception("올바른 방향값이 아닙니다.");
  },

  playerCommandValidate(command) {
    if (command != BRIDGE.GAME.RETRY || command != BRIDGE.GAME.END)
      throw exception("올바른 입력값이 아닙니다.");
  },
};

module.exports = InputException;