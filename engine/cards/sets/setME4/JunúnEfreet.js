"use strict";
const Constants = require ("../../../Constants");
const JunúnEfreetBase = require("../setARN/JunúnEfreet");

class JunúnEfreet extends JunúnEfreetBase {
  constructor(game) {
    super(game, "Junún Efreet", "Masters Edition IV", "ME4");
  }
}

module.exports = JunúnEfreet;
