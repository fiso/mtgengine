"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Onulet extends UnimplementedCard {
  constructor (game) {
    super(game, "Onulet", "Antiquities", "ATQ");
  }
}

module.exports = Onulet;
