"use strict";
const Constants = require ("../../../Constants");
const FireshriekerBase = require("../setCNS/Fireshrieker");

class Fireshrieker extends FireshriekerBase {
  constructor (game) {
    super(game, "Fireshrieker", "Mirrodin", "MRD");
  }
}

module.exports = Fireshrieker;
