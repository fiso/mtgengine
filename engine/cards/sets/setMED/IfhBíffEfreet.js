"use strict";
const Constants = require ("../../../Constants");
const IfhBíffEfreetBase = require("../setARN/IfhBíffEfreet");

class IfhBíffEfreet extends IfhBíffEfreetBase {
  constructor(game) {
    super(game, "Ifh-Bíff Efreet", "Masters Edition", "MED");
  }
}

module.exports = IfhBíffEfreet;
