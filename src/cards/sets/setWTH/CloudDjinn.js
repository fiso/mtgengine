"use strict";
const Constants = require ("../../../Constants");
const CloudDjinnBase = require("../setBTD/CloudDjinn");

class CloudDjinn extends CloudDjinnBase {
  constructor (game) {
    super(game, "Cloud Djinn", "Weatherlight", "WTH");
  }
}

module.exports = CloudDjinn;
