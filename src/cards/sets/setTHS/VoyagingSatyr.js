"use strict";
const Constants = require ("../../../Constants");
const VoyagingSatyrBase = require("../setCN2/VoyagingSatyr");

class VoyagingSatyr extends VoyagingSatyrBase {
  constructor (game) {
    super(game, "Voyaging Satyr", "Theros", "THS");
  }
}

module.exports = VoyagingSatyr;
