"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JwarIsleAvenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Jwar Isle Avenger", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = JwarIsleAvenger;
