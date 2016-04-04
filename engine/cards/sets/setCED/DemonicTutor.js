"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonicTutor extends Card {
  constructor(game) {
    super(game, "Demonic Tutor", "Collector's Edition", "CED");
  }
}

module.exports = DemonicTutor;
