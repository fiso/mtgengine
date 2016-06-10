"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoggleRansacker extends UnimplementedCard {
  constructor (game) {
    super(game, "Noggle Ransacker", "Eventide", "EVE");
  }
}

module.exports = NoggleRansacker;
