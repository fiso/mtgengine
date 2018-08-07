"use strict";
const Constants = require ("../../../Constants");
const InexorableBlobBase = require("../setSOI/InexorableBlob");

class InexorableBlob extends InexorableBlobBase {
  constructor (game) {
    super(game, "Inexorable Blob", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = InexorableBlob;
