"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nebuchadnezzar extends UnimplementedCard {
  constructor(game) {
    super(game, "Nebuchadnezzar", "Chronicles", "CHR");
  }
}

module.exports = Nebuchadnezzar;
