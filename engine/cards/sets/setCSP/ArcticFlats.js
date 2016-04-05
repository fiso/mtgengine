"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcticFlats extends UnimplementedCard {
  constructor(game) {
    super(game, "Arctic Flats", "Coldsnap", "CSP");
  }
}

module.exports = ArcticFlats;
