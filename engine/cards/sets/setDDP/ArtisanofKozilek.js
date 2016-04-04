"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArtisanofKozilekBase = require("../setARC/ArtisanofKozilek.js");

class ArtisanofKozilek extends ArtisanofKozilekBase {
  constructor(game) {
    super(game, "Artisan of Kozilek", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ArtisanofKozilek;
