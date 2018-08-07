"use strict";
const Constants = require ("../../../Constants");
const GeierReachSanitariumBase = require("../setEMN/GeierReachSanitarium");

class GeierReachSanitarium extends GeierReachSanitariumBase {
  constructor (game) {
    super(game, "Geier Reach Sanitarium", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = GeierReachSanitarium;
