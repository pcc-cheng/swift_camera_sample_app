import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:parent_app/second_page/second_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);

  await initPlugin();
  runApp(const MyApp());
  // runApp(const MySwiftVisionApp());
}

Future<void> initPlugin() async {
  // Required internal SwiftVision plugin initialization.
  // await sv.SwiftVisionInitializer.getInstance().initialize();

  // sv.ObservationWorkflowContext.setObservationWorkflowContext(
  //   ObservationWorkflowContextDto(
  //     ObservationAction.newWound,
  //     Patient(
  //       id: '',
  //       firstName: 'Test',
  //       lastName: 'Patient',
  //       gender: Gender.unknown,
  //       birthDate: DateTime.now(),
  //       medicalRecordNumber: '12345',
  //       isAdmitted: true,
  //     ),
  //     const Condition(id: "1", clinicalStatus: ClinicalStatus.active),
  //     [],
  //     Questionnaire(id: ''),
  //   ),
  // );

  // sv.ObservationWorkflowContext.setObservationCapture(const sv.ObservationCaptureMeta());

  // sv.CallbackRegistration.onObservationComplete = (data) async {
  //   Condition condition = sv.ObservationWorkflowContext.context.patient.conditions.firstOrNull ??
  //       const Condition(id: "1", clinicalStatus: ClinicalStatus.active);
  //   final Observation observation;
  //   if (condition.observations.isNotEmpty) {
  //     // Update the observation.
  //     observation = condition.observations.first.copyWith(
  //       woundTrace: data.capturedObservationData.woundTrace!,
  //       woundImage: data.capturedObservationData.woundImage,
  //       autoAnalysis: data.capturedObservationData.autoAnalysis!,
  //       depthPoints: data.capturedObservationData.depthPoints ?? [],
  //       measurements: data.capturedObservationData.measurements!,
  //       smartTissue: data.capturedObservationData.smartTissue!,
  //       undermining: data.capturedObservationData.undermining,
  //       tunnelling: data.capturedObservationData.tunnelling,
  //       headAngle: data.capturedObservationData.headAngle,
  //     );
  //   } else {
  //     // Create a new observation.
  //     observation = Observation(
  //       id: "1",
  //       woundTrace: data.capturedObservationData.woundTrace!,
  //       woundImage: data.capturedObservationData.woundImage,
  //       autoAnalysis: data.capturedObservationData.autoAnalysis!,
  //       depthPoints: data.capturedObservationData.depthPoints ?? [],
  //       measurements: data.capturedObservationData.measurements!,
  //       smartTissue: data.capturedObservationData.smartTissue!,
  //       undermining: data.capturedObservationData.undermining,
  //       tunnelling: data.capturedObservationData.tunnelling,
  //       headAngle: data.capturedObservationData.headAngle,
  //     );
  //   }

  //   // Update the condition
  //   condition = condition.copyWith(observations: [observation]);

  //   sv.ObservationWorkflowContext.setObservationWorkflowContext(
  //     ObservationWorkflowContextDto(
  //       data.action,
  //       data.patient.copyWith(
  //         conditions: [condition],
  //       ),
  //       condition,
  //       data.serviceRequests,
  //       Questionnaire(id: ''),
  //       capturedObservationData: data.capturedObservationData,
  //     ),
  //   );

  //   return Future.value(true);
  // };
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    final AppBar appbar = AppBar(
      // TRY THIS: Try changing the color here to a specific color (to
      // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
      // change color while the other colors stay the same.
      backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      // Here we take the value from the MyHomePage object that was created by
      // the App.build method, and use it to set our appbar title.
      title: Text(widget.title),
    );
    return Scaffold(
      appBar: AppBar(
        // TRY THIS: Try changing the color here to a specific color (to
        // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
        // change color while the other colors stay the same.
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: TextButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => SecondPage(),
            ),
          );
        },
        child: const Text("next"),
      ),
    );
  }
}
