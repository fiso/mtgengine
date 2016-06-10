"use strict";
const Constants = require ("../../../Constants");
const TribalUnityBase = require("../setONS/TribalUnity");

class TribalUnity extends TribalUnityBase {
  constructor (game) {
    super(game, "Tribal Unity", "Planechase", "HOP");
  }
}

module.exports = TribalUnity;
