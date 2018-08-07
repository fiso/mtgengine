"use strict";
const Constants = require ("../../../Constants");
const IshkanahGrafwidowBase = require("../setEMN/IshkanahGrafwidow");

class IshkanahGrafwidow extends IshkanahGrafwidowBase {
  constructor (game) {
    super(game, "Ishkanah, Grafwidow", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = IshkanahGrafwidow;
