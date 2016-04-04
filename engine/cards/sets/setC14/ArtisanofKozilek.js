"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArtisanofKozilekBase = require("../setARC/ArtisanofKozilek.js");

class ArtisanofKozilek extends ArtisanofKozilekBase {
  constructor(game) {
    super(game, "Artisan of Kozilek", "Commander 2014", "C14");
  }
}

module.exports = ArtisanofKozilek;
