"use strict";
const Constants = require ("../../../Constants");
const JununEfreetBase = require("../setARN/JununEfreet");

class JununEfreet extends JununEfreetBase {
  constructor(game) {
    super(game, "Junún Efreet", "Fourth Edition", "4ED");
  }
}

module.exports = JununEfreet;
