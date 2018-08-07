"use strict";
const Constants = require ("../../../Constants");
const TribalUnityBase = require("../setHOP/TribalUnity");

class TribalUnity extends TribalUnityBase {
  constructor (game) {
    super(game, "Tribal Unity", "Onslaught", "ONS");
  }
}

module.exports = TribalUnity;
