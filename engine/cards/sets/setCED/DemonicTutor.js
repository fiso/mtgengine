"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonicTutor extends UnimplementedCard {
  constructor(game) {
    super(game, "Demonic Tutor", "Collector's Edition", "CED");
  }
}

module.exports = DemonicTutor;
