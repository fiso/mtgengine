"use strict";
const Constants = require ("../../../Constants");
const JunúnEfreetBase = require("../setARN/JunúnEfreet");

class JunúnEfreet extends JunúnEfreetBase {
  constructor(game) {
    super(game, "Junún Efreet", "Fourth Edition", "4ED");
  }
}

module.exports = JunúnEfreet;
