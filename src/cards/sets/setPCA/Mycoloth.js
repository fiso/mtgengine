"use strict";
const Constants = require ("../../../Constants");
const MycolothBase = require("../setCMA/Mycoloth");

class Mycoloth extends MycolothBase {
  constructor (game) {
    super(game, "Mycoloth", "Planechase Anthology", "PCA");
  }
}

module.exports = Mycoloth;
