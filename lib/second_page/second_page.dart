import 'package:flutter/material.dart';
import 'package:swift_toolkit/swift_toolkit.dart';
import 'package:swift_vision/swift_vision.dart';
// import 'package:swift_vision/main.dart';

class SecondPage extends StatefulWidget {
  const SecondPage({
    super.key,
  });

  @override
  State<SecondPage> createState() => _SecondPageState();
}

class _SecondPageState extends State<SecondPage> {
  // final MySwiftVisionApp mySwiftVisionApp = MySwiftVisionApp();

  SwiftVisionConfiguration get _swiftVisionConfiguration => SwiftVisionConfiguration(
        debugModeEnable: true,
        autoDepthEnable: false,
        smartTissueEnable: true,
        bodyLocationEnable: true,
        manualMeasurementsEnable: true,
        evaluationSummaryEnable: true,
        autoTraceEnable: true,
        annotateEnable: true,
        headAngleEnable: true,
        style: const SwiftVisionStyle(
          primaryColor: Colors.deepPurple,
          secondaryColor: Colors.orange,
        ),
        analyticsCallback: SwiftAnalyticsCallbackImpl(),
        loggerCallback: SwiftLoggerCallbackImpl(), updateWoundEnable: true,
      );

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          leading: TextButton(
              onPressed: () {
                print('back button has been pressed');
                // mySwiftVisionApp.backAction();
              },
              child: const Text('back action')),
        ),
        primary: false,
        body: Container(
          color: Colors.red,
          padding: const EdgeInsets.all(10),
          child: SwiftCaptureEvaluationWidget(
              startEvaluationParams: StartEvaluationParams(
                observationId: '0',
                onObservationWoundImageCapture: (imageBytes) {
                  return Future.value();
                },
                onObservationComplete: (observation, error) async {
                  return;
                },
              ),
              swiftVisionConfiguration: _swiftVisionConfiguration),
          // SwiftCaptureEvaluationWidget(
          //   startEvaluationParams: StartEvaluationParams(
          //     patientFirstName: 'patientFirstName',
          //     patientLastName: 'patientLastName',
          //     conditionWoundNumber: 0,
          //     woundLocation: WoundLocation(
          //       primaryLocation: 'primaryLocation',
          //       offsetNormalized: null,
          //       isFrontOfBody: null,
          //     ),
          //     onObservationWoundImageCapture: (imageBytes) {
          //       return Future.value();
          //     },
          //   ),
          // ),
        ),
      ),
    );
  }
}

class SwiftAnalyticsCallbackImpl implements SwiftAnalyticsCallback {
  @override
  Future<void> login(String userId) async {}

  @override
  Future<void> logout() async {}

  @override
  Future<void> track(String eventName, {Map<String, dynamic>? properties}) async {}

  @override
  Future<void> registerGlobalProperties(Map<String, dynamic> properties) async {}

  @override
  Future<void> clearGlobalProperties() async {}
}

class SwiftLoggerCallbackImpl implements SwiftLoggerCallback {
  @override
  bool isEnabled = true;

  @override
  Future<void> start(String? token, String environment) async {}

  @override
  Future<void> log(String value) async {}

  @override
  Future<void> error(String value) async {}

  @override
  Future<void> warn(String value) async {}

  @override
  Future<void> info(String value) async {}

  @override
  Future<void> debug(String value) async {}

  @override
  Future<void> login(String userId) async {}

  @override
  Future<void> logout() async {}

  @override
  void registerGlobalProperties(Map<String, dynamic> properties) {}

  @override
  void clearGlobalProperties() {}
}
