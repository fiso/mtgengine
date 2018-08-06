"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GavonyUnhallowed extends UnimplementedCard {
  constructor (game) {
    super(game, "Gavony Unhallowed", "Eldritch Moon", "EMN");
  }
}

module.exports = GavonyUnhallowed;
