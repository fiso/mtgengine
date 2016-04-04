"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Earthbind extends Card {
  constructor(game) {
    super(game, "Earthbind", "Collector's Edition", "CED");
  }
}

module.exports = Earthbind;
