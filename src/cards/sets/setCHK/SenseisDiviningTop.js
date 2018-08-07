"use strict";
const Constants = require ("../../../Constants");
const SenseisDiviningTopBase = require("../setEMA/SenseisDiviningTop");

class SenseisDiviningTop extends SenseisDiviningTopBase {
  constructor (game) {
    super(game, "Sensei's Divining Top", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SenseisDiviningTop;
