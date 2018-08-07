"use strict";
const Constants = require ("../../../Constants");
const ThunderfootBalothBase = require("../setCMA/ThunderfootBaloth");

class ThunderfootBaloth extends ThunderfootBalothBase {
  constructor (game) {
    super(game, "Thunderfoot Baloth", "Commander 2014", "C14");
  }
}

module.exports = ThunderfootBaloth;
