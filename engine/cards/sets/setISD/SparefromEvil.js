"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SparefromEvil extends Card {
  constructor(game) {
    super(game, "Spare from Evil", "Innistrad", "ISD");
  }
}

module.exports = SparefromEvil;
