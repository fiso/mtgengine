"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Glitterfang extends UnimplementedCard {
  constructor(game) {
    super(game, "Glitterfang", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Glitterfang;
