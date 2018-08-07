"use strict";
const Constants = require ("../../../Constants");
const GraveyardMarshalBase = require("../setM19/GraveyardMarshal");

class GraveyardMarshal extends GraveyardMarshalBase {
  constructor (game) {
    super(game, "Graveyard Marshal", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = GraveyardMarshal;
