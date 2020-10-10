// source: protos/service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var protos_car_pb = require('../protos/car_pb.js');
goog.object.extend(proto, protos_car_pb);
goog.exportSymbol('proto.pitwall.CarReply', null, global);
goog.exportSymbol('proto.pitwall.EmptyRequest', null, global);
goog.exportSymbol('proto.pitwall.SessionReply', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pitwall.EmptyRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pitwall.EmptyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pitwall.EmptyRequest.displayName = 'proto.pitwall.EmptyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pitwall.SessionReply = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pitwall.SessionReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pitwall.SessionReply.displayName = 'proto.pitwall.SessionReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pitwall.CarReply = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pitwall.CarReply.repeatedFields_, null);
};
goog.inherits(proto.pitwall.CarReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pitwall.CarReply.displayName = 'proto.pitwall.CarReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.pitwall.EmptyRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.pitwall.EmptyRequest.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.pitwall.EmptyRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.pitwall.EmptyRequest.toObject = function (includeInstance, msg) {
    var f, obj = {

    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pitwall.EmptyRequest}
 */
proto.pitwall.EmptyRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pitwall.EmptyRequest;
  return proto.pitwall.EmptyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pitwall.EmptyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pitwall.EmptyRequest}
 */
proto.pitwall.EmptyRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pitwall.EmptyRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.pitwall.EmptyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pitwall.EmptyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pitwall.EmptyRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.pitwall.SessionReply.prototype.toObject = function (opt_includeInstance) {
    return proto.pitwall.SessionReply.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.pitwall.SessionReply} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.pitwall.SessionReply.toObject = function (includeInstance, msg) {
    var f, obj = {
      session: (f = msg.getSession()) && protos_car_pb.Session.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pitwall.SessionReply}
 */
proto.pitwall.SessionReply.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pitwall.SessionReply;
  return proto.pitwall.SessionReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pitwall.SessionReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pitwall.SessionReply}
 */
proto.pitwall.SessionReply.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new protos_car_pb.Session;
        reader.readMessage(value, protos_car_pb.Session.deserializeBinaryFromReader);
        msg.setSession(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pitwall.SessionReply.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.pitwall.SessionReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pitwall.SessionReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pitwall.SessionReply.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      protos_car_pb.Session.serializeBinaryToWriter
    );
  }
};


/**
 * optional Session session = 1;
 * @return {?proto.pitwall.Session}
 */
proto.pitwall.SessionReply.prototype.getSession = function () {
  return /** @type{?proto.pitwall.Session} */ (
    jspb.Message.getWrapperField(this, protos_car_pb.Session, 1));
};


/**
 * @param {?proto.pitwall.Session|undefined} value
 * @return {!proto.pitwall.SessionReply} returns this
*/
proto.pitwall.SessionReply.prototype.setSession = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pitwall.SessionReply} returns this
 */
proto.pitwall.SessionReply.prototype.clearSession = function () {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pitwall.SessionReply.prototype.hasSession = function () {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pitwall.CarReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.pitwall.CarReply.prototype.toObject = function (opt_includeInstance) {
    return proto.pitwall.CarReply.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.pitwall.CarReply} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.pitwall.CarReply.toObject = function (includeInstance, msg) {
    var f, obj = {
      carsList: jspb.Message.toObjectList(msg.getCarsList(),
        protos_car_pb.Car.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pitwall.CarReply}
 */
proto.pitwall.CarReply.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pitwall.CarReply;
  return proto.pitwall.CarReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pitwall.CarReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pitwall.CarReply}
 */
proto.pitwall.CarReply.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new protos_car_pb.Car;
        reader.readMessage(value, protos_car_pb.Car.deserializeBinaryFromReader);
        msg.addCars(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pitwall.CarReply.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.pitwall.CarReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pitwall.CarReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pitwall.CarReply.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCarsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      protos_car_pb.Car.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Car cars = 1;
 * @return {!Array<!proto.pitwall.Car>}
 */
proto.pitwall.CarReply.prototype.getCarsList = function () {
  return /** @type{!Array<!proto.pitwall.Car>} */ (
    jspb.Message.getRepeatedWrapperField(this, protos_car_pb.Car, 1));
};


/**
 * @param {!Array<!proto.pitwall.Car>} value
 * @return {!proto.pitwall.CarReply} returns this
*/
proto.pitwall.CarReply.prototype.setCarsList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pitwall.Car=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pitwall.Car}
 */
proto.pitwall.CarReply.prototype.addCars = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pitwall.Car, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pitwall.CarReply} returns this
 */
proto.pitwall.CarReply.prototype.clearCarsList = function () {
  return this.setCarsList([]);
};


goog.object.extend(exports, proto.pitwall);
