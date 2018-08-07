"use strict";
const Constants = require ("../../../Constants");
const GrandAbolisherBase = require("../setE01/GrandAbolisher");

class GrandAbolisher extends GrandAbolisherBase {
  constructor (game) {
    super(game, "Grand Abolisher", "Magic 2012", "M12");
  }
}

module.exports = GrandAbolisher;
