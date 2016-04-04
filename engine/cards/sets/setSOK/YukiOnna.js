"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YukiOnna extends Card {
  constructor(game) {
    super(game, "Yuki-Onna", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = YukiOnna;
