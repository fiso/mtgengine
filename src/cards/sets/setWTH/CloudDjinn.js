"use strict";
const Constants = require ("../../../Constants");
const CloudDjinnBase = require("../setVMA/CloudDjinn");

class CloudDjinn extends CloudDjinnBase {
  constructor (game) {
    super(game, "Cloud Djinn", "Weatherlight", "WTH");
  }
}

module.exports = CloudDjinn;
