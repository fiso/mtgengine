"use strict";
const Constants = require ("../../../Constants");
const VeteranSwordsmithBase = require("../setDDO/VeteranSwordsmith");

class VeteranSwordsmith extends VeteranSwordsmithBase {
  constructor (game) {
    super(game, "Veteran Swordsmith", "Magic 2010", "M10");
  }
}

module.exports = VeteranSwordsmith;
