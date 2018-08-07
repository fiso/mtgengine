"use strict";
const Constants = require ("../../../Constants");
const RiverwheelAerialistsBase = require("../setIMA/RiverwheelAerialists");

class RiverwheelAerialists extends RiverwheelAerialistsBase {
  constructor (game) {
    super(game, "Riverwheel Aerialists", "Khans of Tarkir", "KTK");
  }
}

module.exports = RiverwheelAerialists;
