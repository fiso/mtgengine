"use strict";
const Constants = require ("../../../Constants");
const SenseisDiviningTopBase = require("../setCHK/SenseisDiviningTop");

class SenseisDiviningTop extends SenseisDiviningTopBase {
  constructor (game) {
    super(game, "Sensei's Divining Top", "Eternal Masters", "EMA");
  }
}

module.exports = SenseisDiviningTop;
