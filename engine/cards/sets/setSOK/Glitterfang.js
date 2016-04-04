"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Glitterfang extends Card {
  constructor(game) {
    super(game, "Glitterfang", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Glitterfang;
