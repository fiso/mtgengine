"use strict";
const Constants = require ("../../../Constants");
const VeteranArmorsmithBase = require("../setDDO/VeteranArmorsmith");

class VeteranArmorsmith extends VeteranArmorsmithBase {
  constructor (game) {
    super(game, "Veteran Armorsmith", "Magic 2010", "M10");
  }
}

module.exports = VeteranArmorsmith;
