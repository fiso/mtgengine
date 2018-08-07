"use strict";
const Constants = require ("../../../Constants");
const DwynensEliteBase = require("../setDDU/DwynensElite");

class DwynensElite extends DwynensEliteBase {
  constructor (game) {
    super(game, "Dwynen's Elite", "Magic Origins", "ORI");
  }
}

module.exports = DwynensElite;
