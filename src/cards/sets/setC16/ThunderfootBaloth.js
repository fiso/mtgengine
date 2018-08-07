"use strict";
const Constants = require ("../../../Constants");
const ThunderfootBalothBase = require("../setCMA/ThunderfootBaloth");

class ThunderfootBaloth extends ThunderfootBalothBase {
  constructor (game) {
    super(game, "Thunderfoot Baloth", "Commander 2016", "C16");
  }
}

module.exports = ThunderfootBaloth;
