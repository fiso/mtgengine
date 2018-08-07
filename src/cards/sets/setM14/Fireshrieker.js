"use strict";
const Constants = require ("../../../Constants");
const FireshriekerBase = require("../setCNS/Fireshrieker");

class Fireshrieker extends FireshriekerBase {
  constructor (game) {
    super(game, "Fireshrieker", "Magic 2014", "M14");
  }
}

module.exports = Fireshrieker;
