"use strict";
const Constants = require ("../../../Constants");
const KujarSeedsculptorBase = require("../setDDU/KujarSeedsculptor");

class KujarSeedsculptor extends KujarSeedsculptorBase {
  constructor (game) {
    super(game, "Kujar Seedsculptor", "Kaladesh", "KLD");
  }
}

module.exports = KujarSeedsculptor;
