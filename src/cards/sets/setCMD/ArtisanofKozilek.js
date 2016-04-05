"use strict";
const Constants = require ("../../../Constants");
const ArtisanofKozilekBase = require("../setARC/ArtisanofKozilek");

class ArtisanofKozilek extends ArtisanofKozilekBase {
  constructor(game) {
    super(game, "Artisan of Kozilek", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ArtisanofKozilek;
