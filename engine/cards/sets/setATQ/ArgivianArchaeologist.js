"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgivianArchaeologist extends UnimplementedCard {
  constructor(game) {
    super(game, "Argivian Archaeologist", "Antiquities", "ATQ");
  }
}

module.exports = ArgivianArchaeologist;
