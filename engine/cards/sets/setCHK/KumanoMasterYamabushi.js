"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KumanoMasterYamabushi extends Card {
  constructor(game) {
    super(game, "Kumano, Master Yamabushi", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KumanoMasterYamabushi;
